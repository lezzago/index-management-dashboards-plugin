/*
 * Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

import React, { ChangeEvent, Component } from "react";
import { EuiFieldSearch, EuiFlexGroup, EuiFlexItem, EuiPagination } from "@elastic/eui";

interface ManagedIndexControlsProps {
  activePage: number;
  pageCount: number;
  search: string;
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onPageClick: (page: number) => void;
}

export default class ManagedIndexControls extends Component<ManagedIndexControlsProps, object> {
  render() {
    const { activePage, pageCount, search, onSearchChange, onPageClick } = this.props;

    return (
      <EuiFlexGroup style={{ padding: "0px 5px" }}>
        <EuiFlexItem>
          <EuiFieldSearch fullWidth={true} value={search} placeholder="Search" onChange={onSearchChange} />
        </EuiFlexItem>
        {pageCount > 1 && (
          <EuiFlexItem grow={false} style={{ justifyContent: "center" }}>
            <EuiPagination
              pageCount={pageCount}
              activePage={activePage}
              onPageClick={onPageClick}
              data-test-subj="managedIndexControlsPagination"
            />
          </EuiFlexItem>
        )}
      </EuiFlexGroup>
    );
  }
}

/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-cup-crushed",
  "description": "Cookies and brownies",
  "id": "usda-fndds-2707968",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "1-cup-crushed",
      "kind": "unit",
      "label": "1 cup, crushed"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-individual-box-2-oz",
      "kind": "unit",
      "label": "1 individual box (2 oz)"
    },
    {
      "gramsPerUnit": 64.0,
      "key": "1-cup-nfs",
      "kind": "unit",
      "label": "1 cup, NFS"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-arrowroot-biscuit-include-arrowroot-cookie",
      "kind": "unit",
      "label": "1 Arrowroot biscuit (Include Arrowroot cookie)"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 4.0,
      "key": "1-cracker",
      "kind": "unit",
      "label": "1 cracker"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-single-serving-bag",
      "kind": "unit",
      "label": "1 single serving bag"
    }
  ],
  "name": "Cookie, animal",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 74.1,
    "energy_kcal": 446.0,
    "fat_g": 13.8,
    "fibre_g": 1.1,
    "folate_ug": 103.0,
    "iron_mg": 2.75,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 114.0,
    "potassium_mg": 100.0,
    "protein_g": 6.9,
    "salt_g": 0.8375,
    "sat_fat_g": 3.46,
    "sodium_mg": 335.0,
    "sugar_g": 23.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 5.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707968",
  "state": "Unspecified",
  "subcategory": "Cookies and brownies",
  "tags": [
    "cookies-and-brownies",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();

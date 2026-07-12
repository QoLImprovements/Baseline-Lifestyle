/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Vegetable dishes",
  "id": "usda-fndds-2710050",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 99.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "1-slice-3-dia-1-2-thick",
      "kind": "unit",
      "label": "1 slice (3\" dia, 1/2\" thick)"
    },
    {
      "gramsPerUnit": 198.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Eggplant parmesan casserole, regular",
  "nutritionPerBasis": {
    "calcium_mg": 180.0,
    "carbs_g": 8.96,
    "energy_kcal": 155.0,
    "fat_g": 10.5,
    "fibre_g": 1.9,
    "folate_ug": 19.0,
    "iron_mg": 0.72,
    "magnesium_mg": 18.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 152.0,
    "potassium_mg": 225.0,
    "protein_g": 7.02,
    "salt_g": 0.8775,
    "sat_fat_g": 3.55,
    "sodium_mg": 351.0,
    "sugar_g": 3.01,
    "vitamin_a_ug": 53.0,
    "vitamin_c_mg": 2.6,
    "vitamin_e_mg": 1.66,
    "vitamin_k_ug": 7.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710050",
  "state": "Unspecified",
  "subcategory": "Vegetable dishes",
  "tags": [
    "unspecified",
    "vegetable-dishes",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();

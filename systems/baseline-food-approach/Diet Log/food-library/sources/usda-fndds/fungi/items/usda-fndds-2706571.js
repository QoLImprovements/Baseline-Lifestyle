/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fungi",
  "defaultMeasure": "quantity-not-specified",
  "description": "Seafood mixed dishes",
  "id": "usda-fndds-2706571",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 280.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 224.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Tuna noodle casserole with mushroom sauce",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 13.9,
    "energy_kcal": 139.0,
    "fat_g": 5.18,
    "fibre_g": 0.8,
    "folate_ug": 30.0,
    "iron_mg": 1.29,
    "magnesium_mg": 18.0,
    "omega3_g": 0.075,
    "phosphorus_mg": 95.0,
    "potassium_mg": 116.0,
    "protein_g": 9.02,
    "salt_g": 0.82,
    "sat_fat_g": 1.9,
    "sodium_mg": 328.0,
    "sugar_g": 1.14,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 6.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706571",
  "state": "Unspecified",
  "subcategory": "Seafood mixed dishes",
  "tags": [
    "fungi",
    "seafood-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();

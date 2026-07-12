/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "quantity-not-specified",
  "description": "Seafood mixed dishes",
  "id": "usda-fndds-2706833",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 119.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 238.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Tuna salad, made with light creamy dressing",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 7.38,
    "energy_kcal": 78.0,
    "fat_g": 1.16,
    "fibre_g": 0.4,
    "folate_ug": 11.0,
    "iron_mg": 0.93,
    "magnesium_mg": 15.0,
    "omega3_g": 0.111,
    "phosphorus_mg": 91.0,
    "potassium_mg": 176.0,
    "protein_g": 9.82,
    "salt_g": 1.22,
    "sat_fat_g": 0.239,
    "sodium_mg": 488.0,
    "sugar_g": 3.14,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 11.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706833",
  "state": "Unspecified",
  "subcategory": "Seafood mixed dishes",
  "tags": [
    "fish-and-seafood",
    "seafood-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();

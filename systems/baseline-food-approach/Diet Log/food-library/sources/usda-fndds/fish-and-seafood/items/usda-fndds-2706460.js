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
  "id": "usda-fndds-2706460",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Fish curry",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 6.65,
    "energy_kcal": 93.0,
    "fat_g": 5.42,
    "fibre_g": 1.4,
    "folate_ug": 17.0,
    "iron_mg": 0.62,
    "magnesium_mg": 18.0,
    "omega3_g": 0.035,
    "phosphorus_mg": 90.0,
    "potassium_mg": 275.0,
    "protein_g": 4.94,
    "salt_g": 0.8775,
    "sat_fat_g": 1.29,
    "sodium_mg": 351.0,
    "sugar_g": 2.56,
    "vitamin_a_ug": 55.0,
    "vitamin_c_mg": 8.9,
    "vitamin_e_mg": 1.58,
    "vitamin_k_ug": 8.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706460",
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

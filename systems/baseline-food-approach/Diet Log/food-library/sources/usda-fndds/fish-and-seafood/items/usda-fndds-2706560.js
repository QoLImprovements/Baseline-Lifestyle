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
  "id": "usda-fndds-2706560",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-cake-or-patty",
      "kind": "unit",
      "label": "1 cake or patty"
    }
  ],
  "name": "Tuna cake or patty",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 2.65,
    "energy_kcal": 206.0,
    "fat_g": 14.9,
    "fibre_g": 0.2,
    "folate_ug": 12.0,
    "iron_mg": 1.53,
    "magnesium_mg": 19.0,
    "omega3_g": 0.162,
    "phosphorus_mg": 124.0,
    "potassium_mg": 155.0,
    "protein_g": 15.3,
    "salt_g": 0.93,
    "sat_fat_g": 2.45,
    "sodium_mg": 372.0,
    "sugar_g": 0.49,
    "vitamin_a_ug": 30.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 1.65,
    "vitamin_k_ug": 23.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706560",
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

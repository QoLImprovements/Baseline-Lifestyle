/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-cubic-inch",
  "description": "Seafood mixed dishes",
  "id": "usda-fndds-2706567",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 48.0,
      "key": "1-2-slice",
      "kind": "unit",
      "label": "1/2 slice"
    },
    {
      "gramsPerUnit": 48.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Shrimp toast",
  "nutritionPerBasis": {
    "calcium_mg": 59.0,
    "carbs_g": 12.0,
    "energy_kcal": 222.0,
    "fat_g": 15.4,
    "fibre_g": 0.8,
    "folate_ug": 25.0,
    "iron_mg": 0.77,
    "magnesium_mg": 17.0,
    "omega3_g": 0.066,
    "phosphorus_mg": 134.0,
    "potassium_mg": 132.0,
    "protein_g": 8.46,
    "salt_g": 1.395,
    "sat_fat_g": 2.17,
    "sodium_mg": 558.0,
    "sugar_g": 1.4,
    "vitamin_a_ug": 31.0,
    "vitamin_c_mg": 2.6,
    "vitamin_e_mg": 3.51,
    "vitamin_k_ug": 27.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706567",
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

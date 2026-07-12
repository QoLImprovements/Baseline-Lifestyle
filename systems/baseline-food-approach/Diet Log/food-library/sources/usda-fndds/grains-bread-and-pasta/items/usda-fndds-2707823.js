/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-large",
  "description": "Tortillas",
  "id": "usda-fndds-2707823",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    },
    {
      "gramsPerUnit": 77.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "1-extra-large",
      "kind": "unit",
      "label": "1 extra large"
    }
  ],
  "name": "Tortilla, corn",
  "nutritionPerBasis": {
    "calcium_mg": 81.0,
    "carbs_g": 44.6,
    "energy_kcal": 218.0,
    "fat_g": 2.85,
    "fibre_g": 6.3,
    "folate_ug": 5.0,
    "iron_mg": 1.23,
    "magnesium_mg": 72.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 314.0,
    "potassium_mg": 186.0,
    "protein_g": 5.7,
    "salt_g": 0.1125,
    "sat_fat_g": 0.453,
    "sodium_mg": 45.0,
    "sugar_g": 0.88,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707823",
  "state": "Unspecified",
  "subcategory": "Tortillas",
  "tags": [
    "grains-bread-and-pasta",
    "tortillas",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();

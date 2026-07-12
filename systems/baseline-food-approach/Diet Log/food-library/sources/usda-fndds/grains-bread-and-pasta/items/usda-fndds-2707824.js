/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-medium",
  "description": "Tortillas",
  "id": "usda-fndds-2707824",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    },
    {
      "gramsPerUnit": 104.0,
      "key": "1-extra-large",
      "kind": "unit",
      "label": "1 extra large"
    },
    {
      "gramsPerUnit": 33.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Tortilla, flour",
  "nutritionPerBasis": {
    "calcium_mg": 146.0,
    "carbs_g": 49.4,
    "energy_kcal": 306.0,
    "fat_g": 7.99,
    "fibre_g": 3.5,
    "folate_ug": 94.0,
    "iron_mg": 3.63,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 206.0,
    "potassium_mg": 125.0,
    "protein_g": 8.2,
    "salt_g": 1.75,
    "sat_fat_g": 2.92,
    "sodium_mg": 700.0,
    "sugar_g": 3.71,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 7.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707824",
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

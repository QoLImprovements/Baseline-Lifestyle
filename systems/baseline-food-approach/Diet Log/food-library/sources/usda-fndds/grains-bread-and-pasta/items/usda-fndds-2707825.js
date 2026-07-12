/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-extra-large",
  "description": "Tortillas",
  "id": "usda-fndds-2707825",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 104.0,
      "key": "1-extra-large",
      "kind": "unit",
      "label": "1 extra large"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 33.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    }
  ],
  "name": "Tortilla, whole wheat",
  "nutritionPerBasis": {
    "calcium_mg": 244.0,
    "carbs_g": 45.9,
    "energy_kcal": 310.0,
    "fat_g": 9.76,
    "fibre_g": 9.8,
    "folate_ug": 97.0,
    "iron_mg": 2.63,
    "magnesium_mg": 85.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 346.0,
    "potassium_mg": 262.0,
    "protein_g": 9.76,
    "salt_g": 1.5425,
    "sat_fat_g": 4.88,
    "sodium_mg": 617.0,
    "sugar_g": 2.44,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.9,
    "vitamin_k_ug": 4.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707825",
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

/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "quantity-not-specified",
  "description": "Cereal bars",
  "id": "usda-fndds-2708108",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 39.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 39.0,
      "key": "1-little-debbie-macaroo-bar",
      "kind": "unit",
      "label": "1 Little Debbie Macaroo bar"
    },
    {
      "gramsPerUnit": 41.0,
      "key": "1-sunbelt-bar",
      "kind": "unit",
      "label": "1 Sunbelt bar"
    },
    {
      "gramsPerUnit": 39.0,
      "key": "1-bar",
      "kind": "unit",
      "label": "1 bar"
    }
  ],
  "name": "Cereal or granola bar, with coconut, chocolate coated",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 55.2,
    "energy_kcal": 531.0,
    "fat_g": 32.2,
    "fibre_g": 6.2,
    "folate_ug": 9.0,
    "iron_mg": 1.75,
    "magnesium_mg": 56.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 154.0,
    "potassium_mg": 254.0,
    "protein_g": 5.2,
    "salt_g": 0.38,
    "sat_fat_g": 22.7,
    "sodium_mg": 152.0,
    "sugar_g": 34.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708108",
  "state": "Unspecified",
  "subcategory": "Cereal bars",
  "tags": [
    "cereal-bars",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();

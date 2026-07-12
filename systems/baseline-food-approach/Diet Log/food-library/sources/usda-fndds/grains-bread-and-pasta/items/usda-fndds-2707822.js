/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "quantity-not-specified",
  "description": "Tortillas",
  "id": "usda-fndds-2707822",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
      "gramsPerUnit": 65.0,
      "key": "1-extra-large",
      "kind": "unit",
      "label": "1 extra large"
    }
  ],
  "name": "Tortilla, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 114.0,
    "carbs_g": 47.0,
    "energy_kcal": 262.0,
    "fat_g": 5.42,
    "fibre_g": 4.9,
    "folate_ug": 50.0,
    "iron_mg": 2.43,
    "magnesium_mg": 47.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 260.0,
    "potassium_mg": 156.0,
    "protein_g": 6.95,
    "salt_g": 0.93,
    "sat_fat_g": 1.69,
    "sodium_mg": 372.0,
    "sugar_g": 2.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 3.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707822",
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

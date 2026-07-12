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
  "id": "usda-fndds-2707827",
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
      "gramsPerUnit": 33.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    }
  ],
  "name": "Taco shell, flour",
  "nutritionPerBasis": {
    "calcium_mg": 157.0,
    "carbs_g": 53.2,
    "energy_kcal": 511.0,
    "fat_g": 29.1,
    "fibre_g": 3.8,
    "folate_ug": 66.0,
    "iron_mg": 3.92,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 222.0,
    "potassium_mg": 135.0,
    "protein_g": 8.83,
    "salt_g": 1.8875,
    "sat_fat_g": 8.26,
    "sodium_mg": 755.0,
    "sugar_g": 4.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.25,
    "vitamin_k_ug": 18.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707827",
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

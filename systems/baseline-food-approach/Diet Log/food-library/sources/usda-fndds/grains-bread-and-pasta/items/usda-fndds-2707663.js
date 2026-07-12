/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-large-11-1-2-long",
  "description": "Rolls and buns",
  "id": "usda-fndds-2707663",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 153.0,
      "key": "1-large-11-1-2-long",
      "kind": "unit",
      "label": "1 large (11-1/2\" long)"
    },
    {
      "gramsPerUnit": 106.0,
      "key": "1-medium-8-long",
      "kind": "unit",
      "label": "1 medium (8\" long)"
    },
    {
      "gramsPerUnit": 73.0,
      "key": "1-small-5-1-2-long",
      "kind": "unit",
      "label": "1 small (5-1/2\" long)"
    },
    {
      "gramsPerUnit": 106.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Roll, white, hoagie, submarine",
  "nutritionPerBasis": {
    "calcium_mg": 144.0,
    "carbs_g": 50.1,
    "energy_kcal": 279.0,
    "fat_g": 3.91,
    "fibre_g": 1.8,
    "folate_ug": 94.0,
    "iron_mg": 3.43,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 101.0,
    "potassium_mg": 122.0,
    "protein_g": 9.77,
    "salt_g": 1.235,
    "sat_fat_g": 0.842,
    "sodium_mg": 494.0,
    "sugar_g": 7.28,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 4.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707663",
  "state": "Unspecified",
  "subcategory": "Rolls and buns",
  "tags": [
    "grains-bread-and-pasta",
    "rolls-and-buns",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();

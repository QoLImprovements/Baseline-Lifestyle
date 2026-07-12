/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Lamb, goat, game",
  "id": "usda-fndds-2705912",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Rabbit",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 0.0,
    "energy_kcal": 204.0,
    "fat_g": 8.34,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 2.35,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 224.0,
    "potassium_mg": 298.0,
    "protein_g": 30.1,
    "salt_g": 0.86,
    "sat_fat_g": 2.49,
    "sodium_mg": 344.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705912",
  "state": "Unspecified",
  "subcategory": "Lamb, goat, game",
  "tags": [
    "lamb-goat-game",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();

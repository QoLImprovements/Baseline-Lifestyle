/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-bun-length-jumbo",
  "description": "Frankfurters",
  "id": "usda-fndds-2706169",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-bun-length-jumbo",
      "kind": "unit",
      "label": "1 bun length/jumbo"
    },
    {
      "gramsPerUnit": 88.0,
      "key": "1-footlong",
      "kind": "unit",
      "label": "1 footlong"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-cup-sliced",
      "kind": "unit",
      "label": "1 cup, sliced"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-cocktail-miniature",
      "kind": "unit",
      "label": "1 cocktail/miniature"
    }
  ],
  "name": "Hot dog, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 5.1,
    "energy_kcal": 216.0,
    "fat_g": 15.7,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 1.17,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 115.0,
    "potassium_mg": 203.0,
    "protein_g": 13.8,
    "salt_g": 1.5375,
    "sat_fat_g": 6.5,
    "sodium_mg": 615.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706169",
  "state": "Unspecified",
  "subcategory": "Frankfurters",
  "tags": [
    "frankfurters",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();

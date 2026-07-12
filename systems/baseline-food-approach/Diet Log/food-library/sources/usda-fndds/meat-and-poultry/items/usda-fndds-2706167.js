/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-bun-length-jumbo",
  "description": "Frankfurters",
  "id": "usda-fndds-2706167",
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
      "gramsPerUnit": 10.0,
      "key": "1-cocktail-miniature",
      "kind": "unit",
      "label": "1 cocktail/miniature"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-cup-sliced",
      "kind": "unit",
      "label": "1 cup, sliced"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 88.0,
      "key": "1-footlong",
      "kind": "unit",
      "label": "1 footlong"
    }
  ],
  "name": "Hot dog, beef",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 2.89,
    "energy_kcal": 310.0,
    "fat_g": 28.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.14,
    "magnesium_mg": 11.0,
    "omega3_g": 0.016,
    "phosphorus_mg": 122.0,
    "potassium_mg": 326.0,
    "protein_g": 11.7,
    "salt_g": 2.07,
    "sat_fat_g": 11.4,
    "sodium_mg": 828.0,
    "sugar_g": 1.26,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706167",
  "state": "Unspecified",
  "subcategory": "Frankfurters",
  "tags": [
    "frankfurters",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();

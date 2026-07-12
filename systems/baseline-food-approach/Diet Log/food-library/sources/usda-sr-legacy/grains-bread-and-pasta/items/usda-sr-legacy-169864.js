/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "cup",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-169864",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 128.0,
      "key": "jar-earth-s-best-4-5-oz",
      "kind": "unit",
      "label": "jar Earth's Best (4.5 oz)"
    },
    {
      "gramsPerUnit": 14.4,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Babyfood, vegetable and brown rice, strained",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 12.1,
    "energy_kcal": 69.0,
    "fat_g": 1.5,
    "fibre_g": 1.1,
    "folate_ug": 16.0,
    "iron_mg": 0.4,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.0,
    "potassium_mg": 135.0,
    "protein_g": 1.9,
    "salt_g": 0.035,
    "sat_fat_g": 0.14,
    "sodium_mg": 14.0,
    "sugar_g": 2.39,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 13.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169864",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();

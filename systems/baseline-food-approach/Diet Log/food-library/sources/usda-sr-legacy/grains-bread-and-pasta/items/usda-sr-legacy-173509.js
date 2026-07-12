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
  "id": "usda-sr-legacy-173509",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Babyfood, cereal, Oatmeal, dry, GERBER, SINGLE GRAIN, fortified",
  "nutritionPerBasis": {
    "calcium_mg": 1240.0,
    "carbs_g": 73.6,
    "energy_kcal": 396.0,
    "fat_g": 6.42,
    "fibre_g": 7.0,
    "folate_ug": 250.0,
    "iron_mg": 64.0,
    "magnesium_mg": 109.0,
    "omega3_g": 0.06,
    "phosphorus_mg": 459.0,
    "potassium_mg": 597.0,
    "protein_g": 10.9,
    "salt_g": 0.0575,
    "sat_fat_g": 0.844,
    "sodium_mg": 23.0,
    "sugar_g": 12.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 4.95,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173509",
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

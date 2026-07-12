/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "packet-75-oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-171367",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "packet-75-oz",
      "kind": "unit",
      "label": "packet (.75 oz)"
    },
    {
      "gramsPerUnit": 5.3,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Babyfood, oatmeal cereal with fruit, dry, instant, toddler fortified",
  "nutritionPerBasis": {
    "calcium_mg": 286.0,
    "carbs_g": 74.1,
    "energy_kcal": 1680.0,
    "fat_g": 7.05,
    "fibre_g": 7.8,
    "folate_ug": 234.0,
    "iron_mg": 14.3,
    "magnesium_mg": 107.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 429.0,
    "potassium_mg": 346.0,
    "protein_g": 10.5,
    "salt_g": 0.0,
    "sat_fat_g": 1.57,
    "sodium_mg": 0.0,
    "sugar_g": 11.1,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 2.7,
    "vitamin_e_mg": 2.48,
    "vitamin_k_ug": 7.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171367",
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

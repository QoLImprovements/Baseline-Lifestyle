/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "tbsp",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-171358",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2.4,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "0-5-oz",
      "kind": "unit",
      "label": "0.5 oz"
    }
  ],
  "name": "Babyfood, cereal, barley, dry fortified",
  "nutritionPerBasis": {
    "calcium_mg": 643.0,
    "carbs_g": 69.4,
    "energy_kcal": 376.0,
    "fat_g": 6.6,
    "fibre_g": 6.6,
    "folate_ug": 179.0,
    "iron_mg": 48.2,
    "magnesium_mg": 115.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 333.0,
    "potassium_mg": 467.0,
    "protein_g": 13.2,
    "salt_g": 0.0825,
    "sat_fat_g": 0.894,
    "sodium_mg": 33.0,
    "sugar_g": 13.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 5.0,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171358",
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

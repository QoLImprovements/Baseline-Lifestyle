/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "bar",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-171388",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 19.0,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    }
  ],
  "name": "Babyfood, fortified cereal bar, fruit filling",
  "nutritionPerBasis": {
    "calcium_mg": 1050.0,
    "carbs_g": 68.6,
    "energy_kcal": 344.0,
    "fat_g": 5.3,
    "fibre_g": 1.7,
    "folate_ug": 65.0,
    "iron_mg": 13.2,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 247.0,
    "potassium_mg": 180.0,
    "protein_g": 5.43,
    "salt_g": 0.3925,
    "sat_fat_g": 0.453,
    "sodium_mg": 157.0,
    "sugar_g": 42.0,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 2.4,
    "vitamin_e_mg": 0.9,
    "vitamin_k_ug": 4.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171388",
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

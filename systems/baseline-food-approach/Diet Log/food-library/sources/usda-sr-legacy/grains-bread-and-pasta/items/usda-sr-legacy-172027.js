/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "cup-elbows-not-packed-not-packed",
  "description": "Cereal Grains and Pasta",
  "id": "usda-sr-legacy-172027",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 111.0,
      "key": "cup-elbows-not-packed-not-packed",
      "kind": "unit",
      "label": "cup elbows not packed not packed"
    },
    {
      "gramsPerUnit": 166.0,
      "key": "cup-spaghetti-packed",
      "kind": "unit",
      "label": "cup spaghetti packed"
    },
    {
      "gramsPerUnit": 132.0,
      "key": "cup-not-packed-not-packed",
      "kind": "unit",
      "label": "cup(not packed) not packed"
    }
  ],
  "name": "Pasta, gluten-free, corn flour and quinoa flour, cooked, ANCIENT HARVEST",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 31.1,
    "energy_kcal": 638.0,
    "fat_g": 2.07,
    "fibre_g": 3.3,
    "folate_ug": 8.0,
    "iron_mg": 0.72,
    "magnesium_mg": 41.0,
    "omega3_g": 0.035,
    "phosphorus_mg": 91.0,
    "potassium_mg": 63.0,
    "protein_g": 3.23,
    "salt_g": 0.01,
    "sat_fat_g": 0.152,
    "sodium_mg": 4.0,
    "sugar_g": 0.3,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172027",
  "state": "Cooked",
  "subcategory": "Cereal Grains and Pasta",
  "tags": [
    "cereal-grains-and-pasta",
    "cooked",
    "grains-bread-and-pasta"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();

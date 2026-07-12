/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "piece",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-168071",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    }
  ],
  "name": "Restaurant, Latino, bunuelos (fried yeast bread)",
  "nutritionPerBasis": {
    "calcium_mg": 215.0,
    "carbs_g": 48.6,
    "energy_kcal": 1940.0,
    "fat_g": 26.2,
    "fibre_g": 1.5,
    "folate_ug": 0.0,
    "iron_mg": 1.78,
    "magnesium_mg": 19.0,
    "omega3_g": 0.691,
    "phosphorus_mg": 157.0,
    "potassium_mg": 104.0,
    "protein_g": 8.02,
    "salt_g": 1.045,
    "sat_fat_g": 6.83,
    "sodium_mg": 418.0,
    "sugar_g": 12.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.98,
    "vitamin_k_ug": 25.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168071",
  "state": "Fried",
  "subcategory": "Restaurant Foods",
  "tags": [
    "fried",
    "grains-bread-and-pasta",
    "restaurant-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();

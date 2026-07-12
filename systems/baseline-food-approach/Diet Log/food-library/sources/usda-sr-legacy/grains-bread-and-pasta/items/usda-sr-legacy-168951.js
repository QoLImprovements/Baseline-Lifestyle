/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "0-33-cup",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-168951",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "0-33-cup",
      "kind": "unit",
      "label": "0.33 cup"
    },
    {
      "gramsPerUnit": 9.6,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Rice and vermicelli mix, rice pilaf flavor, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 83.0,
    "carbs_g": 76.3,
    "energy_kcal": 1500.0,
    "fat_g": 1.37,
    "fibre_g": 1.2,
    "folate_ug": 212.0,
    "iron_mg": 2.44,
    "magnesium_mg": 32.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 154.0,
    "potassium_mg": 188.0,
    "protein_g": 10.4,
    "salt_g": 3.25,
    "sat_fat_g": 0.307,
    "sodium_mg": 1300.0,
    "sugar_g": 1.53,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 4.1,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168951",
  "state": "Unspecified",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "grains-bread-and-pasta",
    "meals-entrees-and-side-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();

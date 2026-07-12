/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "piece-4-x6",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170780",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 127.0,
      "key": "piece-4-x6",
      "kind": "unit",
      "label": "piece 4\"x6\""
    }
  ],
  "name": "School Lunch, pizza, pepperoni topping, thin crust, whole grain, frozen, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 202.0,
    "carbs_g": 31.2,
    "energy_kcal": 254.0,
    "fat_g": 8.62,
    "fibre_g": 4.3,
    "folate_ug": 55.0,
    "iron_mg": 2.74,
    "magnesium_mg": 51.0,
    "omega3_g": 0.017,
    "phosphorus_mg": 316.0,
    "potassium_mg": 382.0,
    "protein_g": 12.8,
    "salt_g": 1.2375,
    "sat_fat_g": 2.81,
    "sodium_mg": 495.0,
    "sugar_g": 7.62,
    "vitamin_a_ug": 75.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.8,
    "vitamin_k_ug": 5.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170780",
  "state": "Frozen",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "frozen",
    "grains-bread-and-pasta"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();

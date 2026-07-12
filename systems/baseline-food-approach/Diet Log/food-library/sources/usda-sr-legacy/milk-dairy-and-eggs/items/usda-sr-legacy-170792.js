/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "piece-4-x6",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170792",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "piece-4-x6",
      "kind": "unit",
      "label": "piece 4\"x6\""
    }
  ],
  "name": "School Lunch, pizza, cheese topping, thin crust, whole grain, frozen, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 218.0,
    "carbs_g": 31.3,
    "energy_kcal": 247.0,
    "fat_g": 7.91,
    "fibre_g": 4.0,
    "folate_ug": 54.0,
    "iron_mg": 2.53,
    "magnesium_mg": 51.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 316.0,
    "potassium_mg": 348.0,
    "protein_g": 12.7,
    "salt_g": 1.0525,
    "sat_fat_g": 4.0,
    "sodium_mg": 421.0,
    "sugar_g": 7.12,
    "vitamin_a_ug": 66.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.75,
    "vitamin_k_ug": 4.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170792",
  "state": "Frozen",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "frozen",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();

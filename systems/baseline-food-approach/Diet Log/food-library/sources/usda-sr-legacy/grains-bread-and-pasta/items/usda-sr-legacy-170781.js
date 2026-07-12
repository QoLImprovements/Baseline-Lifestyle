/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "slice-per-1-8-pizza",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170781",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 156.0,
      "key": "slice-per-1-8-pizza",
      "kind": "unit",
      "label": "slice per 1/8 pizza"
    },
    {
      "gramsPerUnit": 124.0,
      "key": "slice-per-1-10-pizza",
      "kind": "unit",
      "label": "slice per 1/10 pizza"
    }
  ],
  "name": "School Lunch, pizza, pepperoni topping, thick crust, whole grain, frozen, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 155.0,
    "carbs_g": 28.3,
    "energy_kcal": 1080.0,
    "fat_g": 9.82,
    "fibre_g": 4.3,
    "folate_ug": 59.0,
    "iron_mg": 2.53,
    "magnesium_mg": 41.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 305.0,
    "potassium_mg": 308.0,
    "protein_g": 14.4,
    "salt_g": 1.185,
    "sat_fat_g": 4.22,
    "sodium_mg": 474.0,
    "sugar_g": 4.03,
    "vitamin_a_ug": 43.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.81,
    "vitamin_k_ug": 10.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170781",
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

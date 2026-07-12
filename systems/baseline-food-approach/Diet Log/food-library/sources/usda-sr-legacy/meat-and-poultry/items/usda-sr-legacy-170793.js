/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "slice-per-1-10-pizza",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170793",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 129.0,
      "key": "slice-per-1-10-pizza",
      "kind": "unit",
      "label": "slice per 1/10 pizza"
    }
  ],
  "name": "School Lunch, pizza, sausage topping, thick crust, whole grain, frozen, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 168.0,
    "carbs_g": 30.6,
    "energy_kcal": 1080.0,
    "fat_g": 9.07,
    "fibre_g": 4.0,
    "folate_ug": 81.0,
    "iron_mg": 2.21,
    "magnesium_mg": 23.0,
    "omega3_g": 0.012,
    "phosphorus_mg": 279.0,
    "potassium_mg": 282.0,
    "protein_g": 13.3,
    "salt_g": 1.0825,
    "sat_fat_g": 4.22,
    "sodium_mg": 433.0,
    "sugar_g": 3.72,
    "vitamin_a_ug": 60.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.75,
    "vitamin_k_ug": 3.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170793",
  "state": "Frozen",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "frozen",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();

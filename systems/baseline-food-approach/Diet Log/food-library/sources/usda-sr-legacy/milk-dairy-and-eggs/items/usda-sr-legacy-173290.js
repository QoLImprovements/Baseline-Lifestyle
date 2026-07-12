/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "pizza",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-173290",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 841.0,
      "key": "pizza",
      "kind": "unit",
      "label": "pizza"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "PIZZA HUT 14\" Cheese Pizza, Hand-Tossed Crust",
  "nutritionPerBasis": {
    "calcium_mg": 209.0,
    "carbs_g": 33.4,
    "energy_kcal": 1150.0,
    "fat_g": 10.4,
    "fibre_g": 2.4,
    "folate_ug": 108.0,
    "iron_mg": 2.62,
    "magnesium_mg": 24.0,
    "omega3_g": 0.173,
    "phosphorus_mg": 228.0,
    "potassium_mg": 183.0,
    "protein_g": 12.0,
    "salt_g": 1.685,
    "sat_fat_g": 4.82,
    "sodium_mg": 674.0,
    "sugar_g": 3.13,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.57,
    "vitamin_k_ug": 7.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173290",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();

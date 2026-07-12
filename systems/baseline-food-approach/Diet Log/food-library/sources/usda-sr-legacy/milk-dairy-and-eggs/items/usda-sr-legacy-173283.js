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
  "id": "usda-sr-legacy-173283",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 947.0,
      "key": "pizza",
      "kind": "unit",
      "label": "pizza"
    },
    {
      "gramsPerUnit": 118.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "DOMINO'S 14\" Cheese Pizza, Ultimate Deep Dish Crust",
  "nutritionPerBasis": {
    "calcium_mg": 166.0,
    "carbs_g": 33.5,
    "energy_kcal": 1110.0,
    "fat_g": 9.83,
    "fibre_g": 2.4,
    "folate_ug": 0.0,
    "iron_mg": 2.49,
    "magnesium_mg": 24.0,
    "omega3_g": 0.269,
    "phosphorus_mg": 203.0,
    "potassium_mg": 169.0,
    "protein_g": 10.8,
    "salt_g": 1.5375,
    "sat_fat_g": 4.06,
    "sodium_mg": 615.0,
    "sugar_g": 4.22,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.89,
    "vitamin_k_ug": 6.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173283",
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

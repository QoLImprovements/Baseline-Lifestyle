/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "slice",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-172044",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 907.0,
      "key": "pizza",
      "kind": "unit",
      "label": "pizza"
    }
  ],
  "name": "DOMINO'S 14\" Pepperoni Pizza, Classic Hand-Tossed Crust",
  "nutritionPerBasis": {
    "calcium_mg": 141.0,
    "carbs_g": 31.9,
    "energy_kcal": 1140.0,
    "fat_g": 11.2,
    "fibre_g": 2.1,
    "folate_ug": 0.0,
    "iron_mg": 2.33,
    "magnesium_mg": 24.0,
    "omega3_g": 0.196,
    "phosphorus_mg": 191.0,
    "potassium_mg": 183.0,
    "protein_g": 11.2,
    "salt_g": 1.5275,
    "sat_fat_g": 4.78,
    "sodium_mg": 611.0,
    "sugar_g": 3.69,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.97,
    "vitamin_k_ug": 5.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172044",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();

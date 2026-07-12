/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "slice-1-4-of-pie",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170364",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "slice-1-4-of-pie",
      "kind": "unit",
      "label": "slice 1/4 of pie"
    },
    {
      "gramsPerUnit": 595.0,
      "key": "pie-24-8-oz",
      "kind": "unit",
      "label": "pie 24.8 oz"
    }
  ],
  "name": "DIGIORNO Pizza, supreme topping, thin crispy crust, frozen, baked",
  "nutritionPerBasis": {
    "calcium_mg": 161.0,
    "carbs_g": 28.0,
    "energy_kcal": 255.0,
    "fat_g": 10.8,
    "fibre_g": 2.8,
    "folate_ug": 0.0,
    "iron_mg": 0.92,
    "magnesium_mg": 28.0,
    "omega3_g": 0.128,
    "phosphorus_mg": 187.0,
    "potassium_mg": 278.0,
    "protein_g": 11.4,
    "salt_g": 1.3875,
    "sat_fat_g": 4.38,
    "sodium_mg": 555.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 41.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.82,
    "vitamin_k_ug": 5.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170364",
  "state": "Baked",
  "subcategory": "Fast Foods",
  "tags": [
    "baked",
    "fast-foods",
    "prepared-meals-and-mixed-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();

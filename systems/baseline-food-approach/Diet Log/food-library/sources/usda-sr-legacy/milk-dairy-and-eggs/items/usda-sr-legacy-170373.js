/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "slice",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170373",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 69.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 556.0,
      "key": "pie",
      "kind": "unit",
      "label": "pie"
    }
  ],
  "name": "Pizza, cheese topping, thin crust, frozen, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 228.0,
    "carbs_g": 28.8,
    "energy_kcal": 263.0,
    "fat_g": 11.1,
    "fibre_g": 3.0,
    "folate_ug": 87.0,
    "iron_mg": 2.14,
    "magnesium_mg": 24.0,
    "omega3_g": 0.115,
    "phosphorus_mg": 215.0,
    "potassium_mg": 201.0,
    "protein_g": 11.9,
    "salt_g": 1.1775,
    "sat_fat_g": 5.7,
    "sodium_mg": 471.0,
    "sugar_g": 3.71,
    "vitamin_a_ug": 72.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.74,
    "vitamin_k_ug": 4.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170373",
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

/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "piece",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-168076",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 27.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    },
    {
      "gramsPerUnit": 228.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "DENNY'S, mozzarella cheese sticks",
  "nutritionPerBasis": {
    "calcium_mg": 331.0,
    "carbs_g": 27.2,
    "energy_kcal": 324.0,
    "fat_g": 17.9,
    "fibre_g": 1.6,
    "folate_ug": 26.0,
    "iron_mg": 0.84,
    "magnesium_mg": 21.0,
    "omega3_g": 0.533,
    "phosphorus_mg": 358.0,
    "potassium_mg": 121.0,
    "protein_g": 13.6,
    "salt_g": 2.525,
    "sat_fat_g": 6.64,
    "sodium_mg": 1010.0,
    "sugar_g": 2.83,
    "vitamin_a_ug": 96.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.74,
    "vitamin_k_ug": 25.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168076",
  "state": "Unspecified",
  "subcategory": "Restaurant Foods",
  "tags": [
    "milk-dairy-and-eggs",
    "restaurant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();

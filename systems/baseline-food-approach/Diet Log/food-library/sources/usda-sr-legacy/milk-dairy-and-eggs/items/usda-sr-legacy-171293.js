/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "medium",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-171293",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 298.0,
      "key": "medium",
      "kind": "unit",
      "label": "medium"
    }
  ],
  "name": "Ice cream, light, soft serve, chocolate",
  "nutritionPerBasis": {
    "calcium_mg": 134.0,
    "carbs_g": 23.2,
    "energy_kcal": 141.0,
    "fat_g": 3.69,
    "fibre_g": 0.0,
    "folate_ug": 17.0,
    "iron_mg": 0.6,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 113.0,
    "potassium_mg": 207.0,
    "protein_g": 3.36,
    "salt_g": 0.16,
    "sat_fat_g": 2.35,
    "sodium_mg": 64.0,
    "sugar_g": 19.5,
    "vitamin_a_ug": 91.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171293",
  "state": "Unspecified",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();

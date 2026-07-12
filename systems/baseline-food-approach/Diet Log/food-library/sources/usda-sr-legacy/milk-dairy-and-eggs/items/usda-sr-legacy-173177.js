/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "3-scoop",
  "description": "Beverages",
  "id": "usda-sr-legacy-173177",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 86.0,
      "key": "3-scoop",
      "kind": "unit",
      "label": "3 scoop"
    }
  ],
  "name": "Beverages, Whey protein powder isolate",
  "nutritionPerBasis": {
    "calcium_mg": 698.0,
    "carbs_g": 29.1,
    "energy_kcal": 359.0,
    "fat_g": 1.16,
    "fibre_g": 0.0,
    "folate_ug": 233.0,
    "iron_mg": 1.26,
    "magnesium_mg": 233.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 581.0,
    "potassium_mg": 872.0,
    "protein_g": 58.1,
    "salt_g": 0.93,
    "sat_fat_g": 0.581,
    "sodium_mg": 372.0,
    "sugar_g": 1.16,
    "vitamin_a_ug": 872.0,
    "vitamin_c_mg": 34.9,
    "vitamin_e_mg": 7.85,
    "vitamin_k_ug": 46.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173177",
  "state": "Unspecified",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();

/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "serving",
  "description": "Beverages",
  "id": "usda-sr-legacy-173184",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 256.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Beverages, chocolate malt, powder, prepared with fat free milk",
  "nutritionPerBasis": {
    "calcium_mg": 234.0,
    "carbs_g": 8.64,
    "energy_kcal": 205.0,
    "fat_g": 0.17,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.74,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 97.0,
    "potassium_mg": 158.0,
    "protein_g": 3.25,
    "salt_g": 0.1925,
    "sat_fat_g": 0.112,
    "sodium_mg": 77.0,
    "sugar_g": 7.77,
    "vitamin_a_ug": 137.0,
    "vitamin_c_mg": 3.3,
    "vitamin_e_mg": 0.54,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173184",
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

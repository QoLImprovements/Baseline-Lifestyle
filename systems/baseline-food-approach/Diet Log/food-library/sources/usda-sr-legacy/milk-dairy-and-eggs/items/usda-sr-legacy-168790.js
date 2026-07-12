/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup",
  "description": "Sweets",
  "id": "usda-sr-legacy-168790",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 142.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Rennin, vanilla, dry mix, prepared with 2% milk",
  "nutritionPerBasis": {
    "calcium_mg": 121.0,
    "carbs_g": 12.3,
    "energy_kcal": 77.0,
    "fat_g": 1.77,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.05,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 95.0,
    "potassium_mg": 142.0,
    "protein_g": 3.06,
    "salt_g": 0.115,
    "sat_fat_g": 1.06,
    "sodium_mg": 46.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 51.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168790",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "milk-dairy-and-eggs",
    "sweets",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();

/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "0-5-cup",
  "description": "Sweets",
  "id": "usda-sr-legacy-168780",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 128.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    }
  ],
  "name": "Puddings, chocolate, dry mix, regular, prepared with 2% milk",
  "nutritionPerBasis": {
    "calcium_mg": 112.0,
    "carbs_g": 19.8,
    "energy_kcal": 111.0,
    "fat_g": 2.06,
    "fibre_g": 0.8,
    "folate_ug": 4.0,
    "iron_mg": 0.34,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 94.0,
    "potassium_mg": 156.0,
    "protein_g": 3.28,
    "salt_g": 0.255,
    "sat_fat_g": 1.29,
    "sodium_mg": 102.0,
    "sugar_g": 11.8,
    "vitamin_a_ug": 47.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168780",
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

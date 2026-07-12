/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-170274",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 127.0,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    }
  ],
  "name": "Candies, chocolate, dark, NFS (45-59% cacao solids 90%; 60-69% cacao solids 5%; 70-85% cacao solids 5%)",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 60.0,
    "energy_kcal": 550.0,
    "fat_g": 32.2,
    "fibre_g": 7.2,
    "folate_ug": 0.0,
    "iron_mg": 8.13,
    "magnesium_mg": 152.0,
    "omega3_g": 0.084,
    "phosphorus_mg": 214.0,
    "potassium_mg": 568.0,
    "protein_g": 5.09,
    "salt_g": 0.0575,
    "sat_fat_g": 19.0,
    "sodium_mg": 23.0,
    "sugar_g": 46.1,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.55,
    "vitamin_k_ug": 8.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170274",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "sweets",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();

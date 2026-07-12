/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "3-enchilada",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-169855",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 365.0,
      "key": "3-enchilada",
      "kind": "unit",
      "label": "3 enchilada"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "serving-serving-size-varied-from-1-to-3-enchiladas",
      "kind": "unit",
      "label": "serving serving size varied from 1 to 3 enchiladas"
    },
    {
      "gramsPerUnit": 137.0,
      "key": "enchilada",
      "kind": "unit",
      "label": "enchilada"
    },
    {
      "gramsPerUnit": 257.0,
      "key": "2-enchilada",
      "kind": "unit",
      "label": "2 enchilada"
    }
  ],
  "name": "Restaurant, Mexican, cheese enchilada",
  "nutritionPerBasis": {
    "calcium_mg": 314.0,
    "carbs_g": 15.4,
    "energy_kcal": 273.0,
    "fat_g": 18.5,
    "fibre_g": 1.9,
    "folate_ug": 17.0,
    "iron_mg": 0.66,
    "magnesium_mg": 29.0,
    "omega3_g": 0.257,
    "phosphorus_mg": 268.0,
    "potassium_mg": 140.0,
    "protein_g": 11.2,
    "salt_g": 1.32,
    "sat_fat_g": 8.36,
    "sodium_mg": 528.0,
    "sugar_g": 2.6,
    "vitamin_a_ug": 205.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.28,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169855",
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

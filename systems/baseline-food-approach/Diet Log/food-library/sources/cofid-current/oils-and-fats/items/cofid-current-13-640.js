/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "Calculated from steamed. Water and fat analysed, 2017. 7 samples, fresh, imported, including tips and thicker stems, tough base of stems removed. Roasted in 0.5-1 tbsp oil for 10 minutes",
  "id": "cofid-current-13-640",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Asparagus, roasted in rapeseed oil",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 2.0,
    "energy_kcal": 35.0,
    "fat_g": 1.5,
    "fibre_g": 1.6,
    "folate_ug": 123.0,
    "iron_mg": 0.6,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 79.0,
    "potassium_mg": 342.0,
    "protein_g": 3.5,
    "salt_g": 0.01,
    "sat_fat_g": 0.12,
    "sodium_mg": 4.0,
    "sugar_g": 2.0,
    "vitamin_a_ug": 39.0,
    "vitamin_c_mg": 10.0,
    "vitamin_e_mg": 1.69,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-640",
  "state": "Roasted",
  "subcategory": "DG",
  "tags": [
    "dg",
    "oils-and-fats",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();

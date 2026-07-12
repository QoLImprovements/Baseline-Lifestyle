/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "7 samples, 5 brands, frozen and chilled, 65-68% meat",
  "id": "cofid-current-19-511",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sausages, pork, reduced fat, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 130.0,
    "carbs_g": 10.7,
    "energy_kcal": 160.0,
    "fat_g": 6.1,
    "fibre_g": 2.5,
    "folate_ug": 32.0,
    "iron_mg": 1.3,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 230.0,
    "potassium_mg": 260.0,
    "protein_g": 16.2,
    "salt_g": 1.7,
    "sat_fat_g": 2.24,
    "sodium_mg": 680.0,
    "sugar_g": 3.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-511",
  "state": "Grilled",
  "subcategory": "MI",
  "tags": [
    "grilled",
    "meat-and-poultry",
    "mi"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();

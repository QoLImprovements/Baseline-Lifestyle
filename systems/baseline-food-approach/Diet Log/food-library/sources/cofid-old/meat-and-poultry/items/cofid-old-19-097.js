/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "German pork sausage. Literature sources and manufacturers' data",
  "id": "cofid-old-19-097",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sausage, Bratwurst, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 3.1,
    "energy_kcal": 260.0,
    "fat_g": 20.8,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.3,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 150.0,
    "potassium_mg": 210.0,
    "protein_g": 15.4,
    "salt_g": 1.2,
    "sat_fat_g": 8.0,
    "sodium_mg": 480.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "19-097",
  "state": "Cooked",
  "subcategory": "MI",
  "tags": [
    "cooked",
    "meat-and-poultry",
    "mi"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();

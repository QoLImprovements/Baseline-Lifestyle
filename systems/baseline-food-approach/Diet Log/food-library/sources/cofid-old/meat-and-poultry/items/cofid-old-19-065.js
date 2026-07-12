/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples of own brands from the delicatessen",
  "id": "cofid-old-19-065",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pork pie, sliced",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 18.7,
    "energy_kcal": 380.0,
    "fat_g": 29.9,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.9,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 100.0,
    "potassium_mg": 140.0,
    "protein_g": 10.2,
    "salt_g": 1.675,
    "sat_fat_g": 11.3,
    "sodium_mg": 670.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "19-065",
  "state": "Unspecified",
  "subcategory": "MI",
  "tags": [
    "meat-and-poultry",
    "mi",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();

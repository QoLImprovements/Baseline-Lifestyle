/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "Recipe from manufacturer",
  "id": "cofid-old-15-288",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Salad, carrot and nut with French dressing, retail",
  "nutritionPerBasis": {
    "calcium_mg": 38.0,
    "carbs_g": 13.7,
    "energy_kcal": 218.0,
    "fat_g": 17.6,
    "fibre_g": 0.0,
    "folate_ug": 17.0,
    "iron_mg": 0.8,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 50.0,
    "potassium_mg": 300.0,
    "protein_g": 2.1,
    "salt_g": 0.325,
    "sat_fat_g": 1.7,
    "sodium_mg": 130.0,
    "sugar_g": 13.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 2.95,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "15-288",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "condiments-and-sauces",
    "dr",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();

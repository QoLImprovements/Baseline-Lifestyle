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
  "id": "cofid-old-15-289",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Salad, carrot and nut with mayonnaise, retail",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 10.4,
    "energy_kcal": 278.0,
    "fat_g": 24.8,
    "fibre_g": 0.0,
    "folate_ug": 21.0,
    "iron_mg": 0.6,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 84.0,
    "potassium_mg": 250.0,
    "protein_g": 4.0,
    "salt_g": 0.35,
    "sat_fat_g": 3.9,
    "sodium_mg": 140.0,
    "sugar_g": 9.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 6.28,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "15-289",
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

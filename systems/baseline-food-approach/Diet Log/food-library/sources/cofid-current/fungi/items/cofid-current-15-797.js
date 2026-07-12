/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fungi",
  "defaultMeasure": "g",
  "description": "Recipe from dietary survey records",
  "id": "cofid-current-15-797",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Flan, cheese and mushroom, wholemeal, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 195.0,
    "carbs_g": 17.1,
    "energy_kcal": 272.0,
    "fat_g": 18.1,
    "fibre_g": 2.7,
    "folate_ug": 21.0,
    "iron_mg": 1.03,
    "magnesium_mg": 32.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 240.0,
    "potassium_mg": 224.0,
    "protein_g": 11.3,
    "salt_g": 0.64,
    "sat_fat_g": 10.46,
    "sodium_mg": 256.0,
    "sugar_g": 2.3,
    "vitamin_a_ug": 217.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.74,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-797",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "fungi",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();

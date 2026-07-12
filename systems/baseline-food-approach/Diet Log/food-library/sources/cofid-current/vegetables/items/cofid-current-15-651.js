/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "8 assorted samples; cooked in conventional and microwave ovens according to packet directions",
  "id": "cofid-current-15-651",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Lasagne, vegetable, retail",
  "nutritionPerBasis": {
    "calcium_mg": 73.0,
    "carbs_g": 13.4,
    "energy_kcal": 117.0,
    "fat_g": 5.3,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.8,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 87.0,
    "potassium_mg": 190.0,
    "protein_g": 4.8,
    "salt_g": 0.525,
    "sat_fat_g": 0.0,
    "sodium_mg": 210.0,
    "sugar_g": 4.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-651",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();

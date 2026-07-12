/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "10 samples, 7 products, including Hula Hoops and own brand",
  "id": "cofid-current-17-643",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Potato rings",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 70.5,
    "energy_kcal": 480.0,
    "fat_g": 22.4,
    "fibre_g": 2.6,
    "folate_ug": 5.0,
    "iron_mg": 0.8,
    "magnesium_mg": 34.0,
    "omega3_g": 0.26,
    "phosphorus_mg": 108.0,
    "potassium_mg": 781.0,
    "protein_g": 3.6,
    "salt_g": 2.1125,
    "sat_fat_g": 1.92,
    "sodium_mg": 845.0,
    "sugar_g": 0.3,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 7.64,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-643",
  "state": "Unspecified",
  "subcategory": "SN",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "sn",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();

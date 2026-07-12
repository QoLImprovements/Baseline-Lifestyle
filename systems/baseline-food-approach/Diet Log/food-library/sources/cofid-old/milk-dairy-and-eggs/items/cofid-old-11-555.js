/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "20 samples, 7 brands, thin base and deep pan",
  "id": "cofid-old-11-555",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pizza, cheese and tomato, takeaway",
  "nutritionPerBasis": {
    "calcium_mg": 246.0,
    "carbs_g": 34.5,
    "energy_kcal": 263.0,
    "fat_g": 8.9,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 1.15,
    "magnesium_mg": 25.0,
    "omega3_g": 0.23,
    "phosphorus_mg": 200.0,
    "potassium_mg": 173.0,
    "protein_g": 13.4,
    "salt_g": 0.6625,
    "sat_fat_g": 3.9,
    "sodium_mg": 265.0,
    "sugar_g": 2.3,
    "vitamin_a_ug": 77.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 2.1,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "11-555",
  "state": "Unspecified",
  "subcategory": "AE",
  "tags": [
    "ae",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
